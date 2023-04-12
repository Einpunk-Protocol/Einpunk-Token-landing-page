import React, { useRef, useState, useEffect } from "react";
import { message } from "antd";
import "./HeroPage.css";
import { FaClone } from "react-icons/fa";
import Line from "../../Assets/images/Line.png";
import EinpunkIllustration from "../../Assets/images/einpunk illustration.png";
import { motion } from "framer-motion";

const HeroPage = () => {
  const [messageApi, contextHolder] = message.useMessage();

  let url = "https://t.me/+cBzvl0ZWRkxjYmMx";
  let contractAddress = "0x89a081999249407C1153e135A2Af7d323419A66A";

  const [copy, setCopy] = useState("");
  const contractInput = useRef(null);

  let copyToClipboard = (e) => {
    contractInput.current.select();
    document.execCommand("copy");
    setCopy(true);
    messageApi.open({
      type: "success",
      content: "Copied " + contractAddress,
    });
  };

  return (
    <div className="heropage-container">
      <img src={Line} alt="" className="line" />
      <div className="heropage-details">
        <div className="heropage-text">
          <motion.h2
            animate={{ y: 10 }}
            transition={{ duration: 6, type: "spring" }}
          >
            The World's Fastest Growing <br />{" "}
            <span className="colored">Token</span> Protocol
          </motion.h2>
          <p>
            <span>Einpunk Protocol</span> is a decentralized application
            platform designed to make apps usable on the web.
          </p>
          <p>
            The network runs on a Proof-of-Stake (POS) consensus mechanism
            called Nightsade, which aims to offer scalability and stable fees.
          </p>
          <p>EinpunkUSD is the native utility token that is used for: <br/>
            Fees for processing transaction and storing data <br/>
            Running validator nodes on the network via staking EinpunkUSD token <br/>
            Used for governance votes to determine how network resources are allocated
          </p>
          <div className="contract-input">
            <h5>Einpunk Token Contract Address</h5>
            {contextHolder}
            <input
              type="text"
              defaultValue={contractAddress}
              ref={contractInput}
              readOnly
            />
            <FaClone onClick={copyToClipboard} className="copy-icon" />
          </div>
          <a href={url}>Join our Community</a>
        </div>
        <div className="heropage-image">
          <motion.img
            animate={{ y: -10 }}
            transition={{ duration: 6, type: "spring" }}
            src={EinpunkIllustration}
            alt="Einpunk Illustration"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
