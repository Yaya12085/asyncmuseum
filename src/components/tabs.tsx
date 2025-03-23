import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsComponent({
  options,
  children,
}: {
  options: { label: string; value: string }[];
  children: React.ReactNode;
}) {
  return (
    <Tabs defaultValue={options[0].value} className="w-[400px]">
      <TabsList>
        {options.map((option) => (
          <TabsTrigger key={option.value} value={option.value}>
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {options.map((option) => (
        <TabsContent key={option.value} value={option.value}>
          {children}
        </TabsContent>
      ))}
    </Tabs>
  );
}
