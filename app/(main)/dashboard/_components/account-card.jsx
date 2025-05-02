"use client";

import { updateDefaultAccount } from '@/actions/accounts';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import useFetch from '@/hooks/use-fetch';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { toast } from 'sonner';
import BalanceEditor from './balance-editor';  // to update account balance

const AccountCard = ({account}) => {
    const { name, type, balance, id, isDefault } = account;

    const {
        loading: updateDefaultLoading,
        fn: updateDefaultFn,
        data: updatedAccount,
        error,
    } = useFetch(updateDefaultAccount);

    const handleDefaultChange = async(event) => {
        event.preventDefault();

        if(isDefault){
            toast.warning("You need atleast 1 default account");
            return;
        }
        await updateDefaultFn(id);
    };

    useEffect(()=>{
        if(updatedAccount?.success){
            toast.success("Default account updated successfully");
        }
    }, [updatedAccount,updateDefaultLoading]);

    useEffect(()=>{
        if(error){
            toast.error(error.message || "Failed update default account");
        }
    }, [error]);

  return (
    <Card className="hover:shadow-md transition-shadow group relative">
        <Link href={`/account/${id}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className='text-lg font-medium capitalize'> 
                    {name}
                </CardTitle>
                <Switch checked={isDefault} onClick={handleDefaultChange}
                disabled={updateDefaultLoading}/>
            </CardHeader>
        </Link>                        
            <CardContent>
                <div className="flex items-center gap-2 text-2xl font-bold">
                    ${parseFloat(balance).toFixed(2)}
                    <BalanceEditor accountId={id} initialBalance={balance} />
                </div>
                <p className="text-xs text-muted-foreground">
                    {type.charAt(0) + type.slice(1).toLowerCase()} Account
                </p>
            </CardContent>
            <CardFooter className='flex justify-between text-sm text-muted-foreground'>
                <div className="flex items-center">
                    <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
                    Income
                </div>
                <div className="flex items-center">
                    <ArrowDownRight className="mr-1 h-4 w-4 text-red-500" />
                    Expense
                </div>
            </CardFooter>
        
    </Card>

  )
}

export default AccountCard