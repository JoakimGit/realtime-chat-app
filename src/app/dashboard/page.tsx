import Button from "@/components/ui/Button";

const Dashboard = () => {
  return (
    <main className="flex bg-slate-200 min-h-screen flex-col items-center justify-between p-24">
      <Button>Button</Button>
      <Button size={"sm"}>Button sm</Button>
      <Button variant={"ghost"}>Button ghost</Button>
      <Button variant={"ghost"} size={"lg"}>
        Button ghost lg
      </Button>
      <Button className="bg-red-300 hover:bg-red-500">Button red</Button>
    </main>
  );
};

export default Dashboard;
