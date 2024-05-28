import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const BotProfiles = ({ botProfiles, handleBotProfileChange, botCounts, setBotCounts }) => {
  const handleInputChange = (profile, value) => {
    const intValue = parseInt(value, 10);
    setBotCounts({ ...botCounts, [profile]: isNaN(intValue) ? 0 : intValue });
  };

  return (
    <div className="mb-4" >
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Escoge el perfil de los bots:
      </label>
      <div className="flex flex-col w-full space-y-2">
        {Object.keys(botProfiles).map((profile) => (
          <div key={profile} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id={profile}
                checked={botProfiles[profile]}
                onCheckedChange={() => handleBotProfileChange(profile)}
              />
              <label
                htmlFor={profile}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {profile.replace(/([A-Z])/g, ' $1').trim()}
              </label>
            </div>
            <Input
              type="number"
              value={botCounts[profile] || ""}
              onChange={(e) => handleInputChange(profile, e.target.value)}
              disabled={!botProfiles[profile]}
              className="w-20 shadow"  // Changed from w-full to w-20 to set width to 76px and added dropshadow
              min="0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotProfiles;