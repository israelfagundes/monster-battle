import { AlertCircle } from "lucide-react";

function EmptyList() {
  return (
    <div className="text-center py-16">
      <AlertCircle className="h-16 w-16 text-gray-600 mx-auto mb-4" />
      <h3 className="text-xl text-gray-400 mb-2">No monsters yet</h3>
      <p className="text-gray-500 mb-6">
        Create your first monster to start battling!
      </p>
    </div>
  );
}

export default EmptyList;
