import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Indication = ({ indication, setIndication }) => (
  <div className="mb-4" >
    <Label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="indication"
    >
      Indication:
    </Label>
    <div className="flex items-center space-x-2">
      <Textarea
        id="indication"
        value={indication}
        onChange={(e) => setIndication(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  </div>
);

export default Indication;