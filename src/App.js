import "./App.css";
import "@fontsource/roboto/300.css";
import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { Button } from "@mui/material";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function App() {
  const [value, setValue] = useState();
  const { speak, voices } = useSpeechSynthesis();
  const [voiceName, setvoiceName] = useState();
  console.log(voiceName);
  const handleChange = (event) => {
    setvoiceName(event.target.value);
  };

  return (
    <div className="App">
      <div className="main-cmp">
        <textarea
          id="main-txt"
          name="txt"
          rows="20"
          cols="90"
          placeholder="Enter Your Text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <div className="bottom">
          <div>
            <FormControl sx={{ m: 1, minWidth: 84 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Voice
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={voiceName}
                onChange={handleChange}
                autoWidth
                label="Voice"
              >
                {voices.map((item, index) => {
                  return (
                    <MenuItem key={index + 1} value={item}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <Button
            variant="contained"
            startIcon={<RecordVoiceOverIcon />}
            className="btn"
            onClick={() => speak({ text: value, voice: voiceName })}
          >
            Speak
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
