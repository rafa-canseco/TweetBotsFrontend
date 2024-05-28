import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Hashtags = ({ hashtags, hashtagInput, setHashtagInput, handleAddHashtag }) => (
  <div className="mb-4" >
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="hashtags"
    >
      Hashtags:
    </label>
    <div className="flex items-center space-x-2">
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
);

export default Hashtags;