import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import Countdown from 'react-countdown';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 3 },
  568: { items: 5 },
  1024: { items: 8 },
};

const items = [
  <img src="/config/images/StrayDogz_01.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/config/images/StrayDogz_02.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/config/images/StrayDogz_03.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/config/images/StrayDogz_04.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/config/images/StrayDogz_05.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/config/images/StrayDogz_06.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/config/images/StrayDogz_07.png" onDragStart={handleDragStart} role="presentation" />,
  <img src="/config/images/StrayDogz_08.png" onDragStart={handleDragStart} role="presentation" />,
];
const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} responsive={responsive}
    controlsStrategy="alternate"/>
  );
}

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 1rem;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width:90vw;
  @media (min-width: 768px) {
    width:50vw
  }
  @media (min-width: 1024px) {
    width:40vw
  }
  @media (min-width: 1650px) {
    width:23vw
  }
`;

export const StyledLogo = styled.img`
  width: 90vw;
  display:block;
  margin:auto;
  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 1024px) {
    width: 40vw;
  }
  @media (min-width: 1650px) {
    width: 23vw;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: transparent;
  font-size:1.5rem;
  text-align:center;
  text-decoration: none;
  padding:1rem;
  padding-left:4rem;
  padding-right:4rem;
  background-color:#5ba382;
  background-image:url("/config/images/whitelist_button.png");
  background-position:center;
  background-repeat:no-repeat;
  display:block;
  margin:auto;
  width:70vw;
  margin-top:4rem;
  border-radius:1rem;
  max-width:100%;
  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 1200px) {
    width: 400px;
  }
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `YES, you've just adopted a ${CONFIG.NFT_NAME}! Go visit Opensea.io to cuddle it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen
    >
      <s.Container
        flex={1}
        ai={"center"}
        style={{ backgroundColor: "var(--primary)", display:"block" }}
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/sweb.jpg" : null}
        className="bg"
      >
        <Container>
          <Row className="justify-content-center">
            <Col className="col-md-8 col-lg-6 m-auto mb-3">
              <Navbar className="sdNavbar" >
                {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="w-100 justify-content-around px-1">
                    <NavDropdown title="Community" id="basic-nav-dropdown">
                      <NavDropdown.Item href="https://discord.gg/straydogzwtf">Discord</NavDropdown.Item>
                      {/*<NavDropdown.Divider />*/}
                      <NavDropdown.Item href="https://twitter.com/straydogzwtf">Twitter</NavDropdown.Item>
                    </NavDropdown>
                    {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                    <Nav.Link href="" target={"_blank"} className="comingSoon">Docs</Nav.Link>
                    <Nav.Link href="" target={"_blank"} className="comingSoon">Stray Scan</Nav.Link>
                    <Nav.Link href="" target={"_blank"} className="comingSoon">Scavenge Run</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
            <Col className="col-12 mb-3">
              <Row className="justify-content-center">
                <Col className="col-md-8 col-lg-5">
                  <Row>
                    <Col className="col-6 d-flex justify-content-end">
                      <div className="twitterLink d-block"><a target={"_blank"} className="d-block w-100 h-100" href="#"></a></div>
                    </Col>
                    <Col className="col-6 d-flex justify-content-start">
                      <div className="discordLink"><a target={"_blank"} className="d-block w-100 h-100" href="#"></a></div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className="col-12 mb-4">
              <Row className="justify-content-center">
                <Col className="col-md-8 col-lg-5 m-auto">
                  <img className="w-100" alt={"logo"} src={"/config/images/StrayDogz_Logo.png"} />
                </Col>
              </Row>
            </Col>
            <Col className="col-12 mb-3">
              <Row className="justify-content-center">
                <Col className="col-md-8 col-lg-5 m-auto">
                  <div className="mint">
                    <Countdown
                      date={'2022-07-23T18:00:00'}
                      renderer={props =>
                      <div className="countdownCustom">
                        <div className="countdownTitle">Free Mint event starts in:</div>
                        <div className="countdownContainer">
                          <div>{props.days}<span>days</span></div><div>{props.hours}<span>hours</span></div><div>{props.minutes}<span>min</span></div>
                        </div>
                      </div>}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="col-12 mb-3">
              <Row className="justify-content-center">
                <Col className="col-md-8">
                  <img className="d-block m-auto mb-2" src={"/config/images/eth.png"}/>
                  <p className="descriptionLanding">7777 Genesis StrayDogz NFTs are looking for new home!</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        </s.Container>
        <Gallery/>
    </s.Screen>
  );
}

export default App;
