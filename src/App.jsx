import { Box, Grid, Heading, Strong, RadioCards, Flex, Text, Radio, Button, Container } from '@radix-ui/themes'

import phone1 from '../src/img/images.png'
import phone2 from '../src/img/huba.png'
import phone3 from '../src/img/phone2.png'
import phone4 from '../src/img/phone4.png'
import video4k from './img/video4k.webp'
import total from '../src/img/total.webp'
import video from '../src/img/video.webp'
import './App.css'
import { useState } from 'react'

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const images = [phone1, phone2, phone3, phone4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };


  return (
    <>
      <Grid columns={{ initial: "1", md: "2" }} gap="2" width="auto">
        <Box height="500px" className='left-box'>
          <div className='product-img'>
          <div className='slider'>
          <Button className='slider-button prev' onClick={handlePrev}>
            &#10094;
          </Button>
          <img src={images[currentIndex]} alt={`Phone ${currentIndex + 1}`} />
          <Button className='slider-button next' onClick={handleNext}>
            &#10095;
          </Button>
          <div className='pagination'>
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleSelect(index)}
              ></span>
            ))}
          </div>
        </div>
          </div>
          <Heading className='product-name'>
            iPhone 16
          </Heading>
          {/* <div className='video-container'>
              <img src={video4k} alt="" />
          </div>
          <div className='product-description'></div> */}
        </Box>
        
        <Box height="1000px" className='right-box'>
          <Heading className='device-header'>Customize your device</Heading>
          <Heading className='color' size='4'>
            Color: White
      </Heading>

          <hr />
          <Heading size='4' className='storage-header'>Storage sizes</Heading>
          <Box maxWidth="600px">
            <RadioCards.Root defaultValue="1" columns={{ initial: "1", sm: "2" }} className='ram-container'>
              <RadioCards.Item value="1">
                <Flex direction="column" width="100%" className='grid-item'>
                  <Text weight="bold">128 GB RAM</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="2">
                <Flex direction="column" width="100%" className='grid-item'>
                  <Text weight="bold">256 GB RAM</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="3">
                <Flex direction="column" width="100%" className='grid-item'>
                  <Text weight="bold">512GB RAM</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="4">
                <Flex direction="column" width="100%" className='grid-item'>
                  <Text weight="bold">1TB RAM</Text>
                </Flex>
              </RadioCards.Item>
            </RadioCards.Root>
          </Box>
          <hr />
          <Heading size='4' className='customer-header'>Are you new or existing customer?</Heading>
          <Box maxWidth="600px">
            <RadioCards.Root className='customer-container'  defaultValue="1" columns={{ initial: "1", sm: "3" }}>
              <RadioCards.Item value="1">
                <Flex direction="column" width="100%">
                  <Text weight="bold">New customer</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="2">
                <Flex direction="column" width="100%">
                  <Text weight="bold">Existing customer</Text>
                </Flex>
              </RadioCards.Item>
            </RadioCards.Root>
          </Box>
          <hr />
          <Heading size='4' className='customer-header'>Have a trade-in device?</Heading>
          <Box maxWidth="600px">
            <RadioCards.Root defaultValue="1" columns={{ initial: "1", sm: "3" }}>
              <RadioCards.Item value="1">
                <Flex direction="column" width="100%">
                  <Text weight="bold">Get a trade-in estimate</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="2">
                <Flex direction="column" width="100%">
                  <Text weight="bold">Skip trade-in</Text>
                </Flex>
              </RadioCards.Item>
            </RadioCards.Root>
          </Box>
          <Heading size='4' className='payment-heading'>Choose a payment option</Heading>
          <Flex wrap='wrap' gap="4" className='payment-container'>
            <Box
              width="400px"
              height="64px"
              className='payment-card'
              style={{
                backgroundColor: selectedOption === 'monthly' ? '#cfe8fc' : '#f0f0f0', // Используем явный цвет для изменения фона
                border: selectedOption === 'monthly' ? '' : '2px solid transparent',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
              onClick={() => handleOptionChange('monthly')}
            >
              <Flex gap="2">
                <Radio
                  size="3"
                  name="payment-option"
                  value="monthly"
                  checked={selectedOption === 'monthly'}
                  onChange={() => handleOptionChange('monthly')}
                />
              </Flex>
              <Strong className='payment-text'>Pay monthly</Strong>
              <Strong className='price-text'>$50.00/month</Strong>
            </Box>
            <Box
              width="400px"
              height="64px"
              className='payment-card'
              style={{
                backgroundColor: selectedOption === 'full' ? '#cfe8fc' : '#f0f0f0',
                border: selectedOption === 'full' ? '' : '2px solid transparent',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
              onClick={() => handleOptionChange('full')}
            >
              <Flex gap="2">
                <Radio
                  size="3"
                  name="payment-option"
                  value="full"
                  checked={selectedOption === 'full'}
                  onChange={() => handleOptionChange('full')}
                />
              </Flex>
              <Strong className='payment-text'>Pay in full</Strong>
              <Strong className='price-text'>$1,199</Strong>
            </Box>
          </Flex>
          <Button className='cart-btn' radius="large" variant="soft">
            Add to cart
          </Button>
        </Box>
        <Box className='box-container' style={{ background: "#121113", borderRadius: "var(--radius-3)" }}>
          <Container size="1">
              <img src={video} alt="" />
          </Container>
        </Box>
      </Grid>
      
    </>
  );
}

export default App;
