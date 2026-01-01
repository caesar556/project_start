import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RequestCard } from "./RequestCard";
import type { MoveRequest, ClearanceRequest } from "@/types";

type Props = {
  moveRequests: MoveRequest[];
  clearanceRequests: ClearanceRequest[];
  onRefresh?: () => void;
};

export function RequestsTabs({ moveRequests, clearanceRequests, onRefresh }: Props) {
  return (
    <Tabs defaultValue="move" className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 pb-4">
        <TabsList className="bg-gray-100/50 p-1 border border-gray-200 h-11">
          <TabsTrigger
            value="move"
            className="px-6 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm font-bold transition-all"
          >
            Umzüge ({moveRequests.length})
          </TabsTrigger>
          <TabsTrigger
            value="clearance"
            className="px-6 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm font-bold transition-all"
          >
            Entrümpelungen ({clearanceRequests.length})
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="move" className="mt-0 outline-none">
        {moveRequests.length === 0 ? (
          <Empty text="Keine Umzugsanfragen gefunden." />
        ) : (
          <Grid>
            {moveRequests.map((req) => (
              <RequestCard key={req._id} data={req} type="move" onUpdate={onRefresh} />
            ))}
          </Grid>
        )}
      </TabsContent>

      <TabsContent value="clearance" className="mt-0 outline-none">
        {clearanceRequests.length === 0 ? (
          <Empty text="Keine Entrümpelungsanfragen gefunden." />
        ) : (
          <Grid>
            {clearanceRequests.map((req) => (
              <RequestCard key={req._id} data={req} type="clearance" onUpdate={onRefresh} />
            ))}
          </Grid>
        )}
      </TabsContent>
    </Tabs>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
      <p className="text-gray-400 font-medium italic">{text}</p>
    </div>
  );
}
