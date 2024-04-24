import { useState } from "react";
import ShortenLinks from "./ShortenLinks";

function Shorten() {
  const [inputValue, setInputValue] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [validInput, setValidInput] = useState(true);

  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(str);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue === "") {
      setValidInput(false);
      setErrMsg("Please enter something");
    } else if (!validURL(inputValue)) {
      setValidInput(false);
      setErrMsg("Please enter a valid URL");
    } else {
      setValidInput(true);
      setErrMsg("");
      alert("Success");
    }
    setInputValue("");
  }

  return (
    <section id="shorten" className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          onSubmit={handleSubmit}
          id="link-form"
          className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        >
          <input
            type="text"
            className={`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none ${
              validInput ? "" : "border-red"
            }`}
            placeholder="Shorten a link here"
            id="link-input"
            value={inputValue}
            onChange={handleChange}
          />

          <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
            Shorten It
          </button>

          <div
            id="err-msg"
            className="md:absolute left-10 bottom-3 text-red text-sm italic mx-auto"
          >
            {errMsg}
          </div>
        </form>

        <ShortenLinks
          link="https://frontendmentor.io"
          link2="https://rel.ink/k4IKyk"
          color="cyan"
        />
        <ShortenLinks
          link="https://twitter.com/frontendmentor"
          link2="https://rel.ink/gxOXp9"
          color="darkViolet"
        />
        <ShortenLinks
          link="https://linkedin.com/frontend-mentor"
          link2="https://rel.ink/gob3x9"
          color="cyan"
        />
      </div>
    </section>
  );
}

export default Shorten;
