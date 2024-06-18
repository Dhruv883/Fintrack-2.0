import dynamic from "next/dynamic";
const BalanceChart = dynamic(() => import("@/components/BalanceChart"), {
  ssr: false,
});
const SummaryChart = dynamic(() => import("@/components/SummaryChart"), {
  ssr: false,
});
const TransactionChart = dynamic(
  () => import("@/components/TransactionChart"),
  {
    ssr: false,
  }
);

export { BalanceChart, SummaryChart, TransactionChart };
