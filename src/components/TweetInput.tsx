import React from "react";
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

const TweetInput = ({ tweetId,setTweetId,handlePreview}) => (
    <div className="mb-4" >
        <label className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="tweetId"
        >
            Tweet ID:
        </label>
        <div className="flex items-center space-x-2">
            <Input
            id="tweetId"
            type="text"
            value={tweetId}
            onChange={(e) => setTweetId(e.target.value)}
            className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <Button
            onClick={handlePreview}
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
                PREVIEW
            </Button>
            </div>
    </div>
);

export default TweetInput;