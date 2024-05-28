import { useState, useRef } from "react";
import TweetInput from "@/components/TweetInput";
import Hashtags from "@/components/Hashtags";
import Indication from "@/components/Indication";
import BotProfiles from "@/components/BotProfiles";
import { Button } from "@/components/ui/button";
import { Tweet } from "react-twitter-widgets";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from 'axios';

const Reply = () => {


  const [tweetId, setTweetId] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [hashtagInput, setHashtagInput] = useState("");
  const [indication, setIndication] = useState("");
  const [loading, setLoading] = useState(false);
  const [botProfiles, setBotProfiles] = useState({
    estudianteUniversitario: false,
    jovenTrabajador: false,
    jovenEmprendedor: false,
    profesionalMedianaEdad: false,
    jubilado: false,
  });
  const [botCounts, setBotCounts] = useState({
    estudianteUniversitario: 0,
    jovenTrabajador: 0,
    jovenEmprendedor: 0,
    profesionalMedianaEdad: 0,
    jubilado: 0,
  });
  const [previewResponse, setPreviewResponse] = useState(null);
  const totalBots = 4;
  const botsDisponibles = totalBots - Object.values(botCounts).reduce((a, b) => a + b, 0);
  const cancelRef = useRef(null);

  const profileIds = {
    estudianteUniversitario: 1,
    jovenTrabajador: 2,
    jovenEmprendedor: 3,
    profesionalMedianaEdad: 4,
    jubilado: 5,
  };

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

  const handlePreview = async () => {
    if (tweetId.trim() !== "") {
      setLoading(true);
      try {
        const firstSelectedProfile = Object.keys(botProfiles).find(profile => botProfiles[profile] as boolean);
        const requestData = {
          tweetId: tweetId,
          hashtags: hashtags,
          indication: indication,
          profile: firstSelectedProfile ? { id: profileIds[firstSelectedProfile] } : {}
        };
        const response = await axios.post('http://localhost:8000/simulate_tweet', requestData);
        setPreviewResponse(response.data);
      } catch (error) {
        console.error('Error making API request:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEngage = async () => {
    setLoading(true);
    try {
      const botAssignments = Object.keys(botProfiles).reduce((acc, profile) => {
        if (botProfiles[profile]) {
          acc.push({
            profileId: profileIds[profile],
            botCount: botCounts[profile],
          });
        }
        return acc;
      }, []);
  
      const requestData = {
        tweetId: tweetId,
        hashtags: hashtags,
        indication: indication,
        botAssignments: botAssignments,
      };
  
      await axios.post('http://localhost:8000/respond_to_tweet', requestData);
    } catch (error) {
      console.error('Error making API request:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 flex">
      <div className="w-1/2" style={{ paddingLeft: "77px" }}>
        <div className="w-full">
          <TweetInput tweetId={tweetId} setTweetId={setTweetId} handlePreview={handlePreview} />
          <Hashtags hashtags={hashtags} hashtagInput={hashtagInput} setHashtagInput={setHashtagInput} handleAddHashtag={handleAddHashtag} />
          <Indication indication={indication} setIndication={setIndication} />
          <div className="mb-4 text-center py-4">
            <p>
              Bots disponibles:{" "}
              {botsDisponibles >= 0 ? botsDisponibles : "Ya no hay bots disponibles"}
            </p>
          </div>
          <BotProfiles
            botProfiles={botProfiles}
            handleBotProfileChange={handleBotProfileChange}
            botCounts={botCounts}
            setBotCounts={setBotCounts}
          />
          <div className="flex items-center space-x-2">
            <Button
              className="text-black border bg-white w-60 h-11 rounded-xl hover:border-2"
              onClick={handlePreview} // onClick event added here
            >
              PREVIEW
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  className="bg-black hover:bg-customRed text-white font-bold w-60 h-11 rounded-xl"
                  style={{ opacity: 1 }}
                >
                  ENGAGE
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>¿Crees en la democracia?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel ref={cancelRef}>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={handleEngage}>Continuar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
      <div className="w-1/2 px-10">
        <div className=" p-2" style={{ top: '82px', left: '854px', width: '314px', height: '399px', position: 'absolute' }}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            tweetId && <Tweet tweetId={tweetId} />
          )}
        </div>
        <div className="border p-2 mt-40 rounded-xl" style={{ position: 'absolute', top: '481px', left: '854px', width: '314px' }}>
          {previewResponse ? (
            <div>{previewResponse}</div>
          ) : (
            <div>Preview del msj</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reply;
