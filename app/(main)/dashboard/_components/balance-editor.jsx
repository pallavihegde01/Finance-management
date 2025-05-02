import {
    Popover,
    PopoverTrigger,
    PopoverContent,
  } from "@/components/ui/popover";
  import { Button } from "@/components/ui/button";
  import { Pencil } from "lucide-react";
  import { useState, useEffect } from "react";
  import useFetch from "@/hooks/use-fetch";
  import { updateAccountBalance } from "@/actions/accounts";
  import { Input } from "@/components/ui/input";
  import { toast } from "sonner";
  
  const BalanceEditor = ({ accountId, initialBalance }) => {
    const [balance, setBalance] = useState(initialBalance);
    const [isOpen, setIsOpen] = useState(false);
  
    const {
      fn: updateBalanceFn,
      data,
      error,
      loading,
    } = useFetch(updateAccountBalance);
  
    const handleSubmit = async () => {
        if (!balance || parseFloat(balance) <= 0) {
            toast.warning("Please enter a valid positive balance before saving.");
            return;
        }
        const formattedBalance = parseFloat(balance).toFixed(2);
        await updateBalanceFn(accountId, parseFloat(formattedBalance));
    };

    const handleChange = (e) => {
        let value = e.target.value;
        
        // const floatValue = value.replace(/[^0-9.]/g, "");
        
        setBalance(value);
    };
  
    useEffect(() => {
      if (data?.success) {
        toast.success("Balance updated");
        setIsOpen(false);
      }
    }, [data]);
  
    useEffect(() => {
      if (error) {
        toast.error(error.message || "Update failed");
      }
    }, [error]);
  
    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground">
            <Pencil className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 space-y-2">
          <Input
            type="number"
            value={balance}
            onChange={handleChange}
          />
          <Button size="sm" onClick={handleSubmit} disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </Button>
        </PopoverContent>
      </Popover>
    );
  };
export default BalanceEditor;