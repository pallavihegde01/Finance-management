import {
    BarChart3,
    ShieldCheck,
    PieChart,
    CreditCard,
    BellRing,
    CalendarCheck,
    Users,
    Database,
    TrendingUp,
    Sparkles,
    UploadCloud,
    UserPlus,
  } from "lucide-react";
  
  // Stats Data
  export const statsData = [
    {
      value: "75K+",
      label: "Monthly Visitors",
    },
    {
      value: "$5M+",
      label: "Savings Managed",
    },
    {
      value: "98.7%",
      label: "Customer Satisfaction",
    },
    {
      value: "1M+",
      label: "Receipts Processed",
    },
  ];
  
  
  // Features Data
  export const featuresData = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#111439]" />,
      title: "Secure Authentication",
      description:
        "Protect your data with advanced biometric and 2FA authentication options",
    },
    {
      icon: <BellRing className="h-8 w-8 text-[#111439]" />,
      title: "Real-Time Alerts",
      description:
        "Receive instant notifications for unusual activity or spending limits",
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-[#111439]" />,
      title: "Bill Reminders",
      description: "Never miss a due date with smart bill tracking and reminders",
    },
    {
      icon: <Users className="h-8 w-8 text-[#111439]" />,
      title: "Family Accounts",
      description:
        "Share financial goals and budgets with family members securely",
    },
    {
      icon: <Database className="h-8 w-8 text-[#111439]" />,
      title: "Cloud Backup",
      description:
        "Automatically back up your financial data securely to the cloud",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#111439]" />,
      title: "Investment Tracking",
      description:
        "Monitor stocks, crypto, and other assets in real-time within the app",
    },
  ];
  
  
  // How It Works Data
  export const howItWorksData = [
    {
      icon: <UserPlus className="h-8 w-8 text-[#111439]" />,
      title: "1. Sign Up Instantly",
      description:
        "Create your free account using email or social login in just a few clicks",
    },
    {
      icon: <UploadCloud className="h-8 w-8 text-[#111439]" />,
      title: "2. Import Your Data",
      description:
        "Securely add accounts or upload receipts to start tracking",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-[#111439]" />,
      title: "3. Let AI Do the Work",
      description:
        "Enjoy automated insights, budget suggestions, and financial summaries powered by AI",
    },
  ];
  
  
  // Testimonials Data
  export const testimonialsData = [
    {
      name: "Aisha Patel",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "This platform gave me complete visibility into our spending. The automated reports are a game-changer for budgeting and investor updates.",
    },
    {
      name: "James Lee",
      role: "Remote Consultant",
      image: "https://randomuser.me/api/portraits/men/66.jpg",
      quote:
        "I love how seamless the experience is. Adding my accounts was easy, and the AI suggestions actually helped me cut down on unnecessary expenses.",
    },
    {
      name: "Daniela Russo",
      role: "Nonprofit Manager",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
      quote:
        "With tight budgets and donor accountability, having real-time tracking and fraud protection has been essential to our operations.",
    },
  ];
  