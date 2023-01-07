import React, {useEffect} from 'react'
import "./Roadmap.css"
import {Tag} from 'antd'
import { useInView } from 'react-intersection-observer'
import {motion, useAnimation} from "framer-motion"

const Roadmap = () => {
    const {ref, inView} =  useInView({
        threshold: 0.2
    });

    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    type: "spring", duration: 3, bounce: 0.2
                }
            })
        }
        if(!inView){
            animation.start({
                x: "-100vw",
                transition: {
                    type: "spring", duration: 3, bounce: 0.2
                }
            })
        }
        console.log("UseEffect Hook, inView=", inView)
    }, [inView])
  return (
    <div  className='roadmap-container'  ref={ref}>
        <h4 className='roadmap-text'>Roadmap</h4>
        <p className='roadmap-note'>Note: We are determined to follow through each project listed, within their given timeframes.</p>
        <motion.div
        animate={animation}
         className='roadmap-paletees'>
        <div className='roadmap-paletee'>
            <h5>Phase 1</h5>
            <p>Einpunk Token Launch <Tag color="green">Done</Tag></p>
            <p>500 holders <Tag color="yellow">Ungoing</Tag></p>
            <p>2000 wallet Transactions <Tag color="yellow">Ungoing</Tag></p>
            <p>Website Launch <Tag color="green">Done</Tag></p>
            <p>Contract Auditing by solidity finance</p>
            <p>1000 organic telegram members</p>
            <p>Creation of Chinese community</p>
        </div>
        <motion.div
        animate={animation}
         className='roadmap-paletee'>
            <h5>Phase 2</h5>
            <p>CoinMarketCap & Coin gecko listing</p>
            <p>5000 telegram members</p>
            <p>2000 wallet Transactions</p>
            <p>2000 holders</p>
            <p>Listing on a centralised exchange</p>
        </motion.div>
        </motion.div>
        <div className='roadmap-paletees' >
        <motion.div 
         animate={animation}
        className='roadmap-paletee'>
            <h5>Phase 3</h5>
            <p>20,000 telegram members</p>
            <p>12,000 holders</p>
            <p>Large influencer marketing</p>
            <p>Project review</p>
            <p>Website redesign</p>
        </motion.div>
        <motion.div
         animate={animation}
         className='roadmap-paletee'>
            <h5>Phase 4</h5>
            <p>70,000 holders</p>
            <p>100,000 telegram members</p>
            <p>Launch of Einpunk Market website</p>
            <p>Launch of Einpunk Dapp</p>
            <p>Increase marketing</p>
            <p>Partnership announcement</p>
            <p>Listing on more Major Top CEX</p>
        </motion.div>
        </div>
    </div>
  )
}

export default Roadmap