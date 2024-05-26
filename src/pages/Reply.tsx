"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const Reply = () => {
  const [tweetId, setTweetId] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState("");
  const [indication, setIndication] = useState("");
  const [botProfiles, setBotProfiles] = useState({
    estudianteUniversitario: false,
    jovenTrabajador: false,
    jovenEmprendedor: false,
    profesionalMedianaEdad: false,
    jubilado: false,
  });

  const handleAddHashtag = () => {
    if (hashtagInput.trim() !== "") {
      setHashtags([...hashtags, hashtagInput.trim()]);
      setHashtagInput("");
    }
  };

  const handleBotProfileChange = (profile: keyof typeof botProfiles) => {
    setBotProfiles({
      ...botProfiles,
      [profile]: !botProfiles[profile],
    });
  };

  const handleEngage = () => {
    // Handle the engage action here
    console.log("Engage clicked");
  };

  return (
    <div className="p-4">
      <div className="mb-4" style={{ paddingLeft: "60px" }}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="tweetId"
        >
          Tweet id:
        </label>
        <div className="flex w-1/2 items-center space-x-2">
          <Input
            id="tweetId"
            type="text"
            value={tweetId}
            onChange={(e) => setTweetId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <Button
            type="submit"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            PREVIEW
          </Button>
        </div>
      </div>
      <div className="mb-4" style={{ paddingLeft: "60px" }}>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="hashtags"
        >
          Hashtags:
        </label>
        <div className="flex w-1/2 items-center space-x-2">
          <Input
            id="hashtags"
            type="text"
            value={hashtagInput}
            onChange={(e) => setHashtagInput(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <Button
            onClick={handleAddHashtag}
            type="submit"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            ADD
          </Button>
        </div>
        <div className="mt-2">
          {hashtags.map((hashtag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{hashtag}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-4" style={{ paddingLeft: "60px" }}>
        <Label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="indication"
        >
          Indication:
        </Label>
        <div className="flex w-1/2 items-center space-x-2">
          <Textarea
            id="indication"
            value={indication}
            onChange={(e) => setIndication(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="mb-4" style={{ paddingLeft: "60px" }}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Escoge el perfil de los bots:
        </label>
        <div className="flex flex-col w-1/2 space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="estudianteUniversitario"
              checked={botProfiles.estudianteUniversitario}
              onCheckedChange={() =>
                handleBotProfileChange("estudianteUniversitario")
              }
            />
            <label
              htmlFor="estudianteUniversitario"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Estudiante Universitario
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="jovenTrabajador"
              checked={botProfiles.jovenTrabajador}
              onCheckedChange={() => handleBotProfileChange("jovenTrabajador")}
            />
            <label
              htmlFor="jovenTrabajador"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Joven Trabajador
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="jovenEmprendedor"
              checked={botProfiles.jovenEmprendedor}
              onCheckedChange={() => handleBotProfileChange("jovenEmprendedor")}
            />
            <label
              htmlFor="jovenEmprendedor"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Joven Emprendedor
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="profesionalMedianaEdad"
              checked={botProfiles.profesionalMedianaEdad}
              onCheckedChange={() =>
                handleBotProfileChange("profesionalMedianaEdad")
              }
            />
            <label
              htmlFor="profesionalMedianaEdad"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Profesional de Mediana Edad
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="jubilado"
              checked={botProfiles.jubilado}
              onCheckedChange={() => handleBotProfileChange("jubilado")}
            />
            <label
              htmlFor="jubilado"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Jubilado
            </label>
          </div>
        </div>
      </div>
      <div
        className="flex w-1/2 items-center space-x-2"
        style={{ paddingLeft: "60px" }}
      >
        <Button
          onClick={handleEngage}
          className="bg-black hover:bg-customRed text-white font-bold w-60 h-11 rounded"
          style={{ opacity: 1 }}
        >
          ENGAGE
        </Button>
      </div>
    </div>
  );
};

export default Reply;
