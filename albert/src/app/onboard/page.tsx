'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useForm, FormProvider } from "react-hook-form";

import LevelSelection from '../../../pages/LevelSelection';
import SpinSurvey from '../../../pages/SpinSurvey';
import JumpSurvey from '../../../pages/JumpSurvey';
import Results from '../../../pages/Results';

const steps = ['Level', 'Spins', 'Jumps/Choreo', 'Optimize'];
const pages = [
  LevelSelection,
  SpinSurvey,
  JumpSurvey,
  Results
]

export default function OnBoard() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const methods = useForm({
    defaultValues: {
      level: 'preBronze',
      // spins
      '2FtUSp': 0,
      'USp': 0,
      'LSp': 0,
      'CSp': 0,
      'SSp': 0,
      'CUSp': 0,
      'CLSp': 0,
      'CCSp': 0,
      'CSSp': 0,
      'CoSp': 0,
      'CCoSp': 0,
      'FUSp': 0,
      'FLSp': 0,
      'FCSp': 0,
      'FSSp': 0,
      // jumps
      '1HF': 0,
      '1HLz': 0,
      '1Wz': 0,
      '1T': 0,
      '1S': 0,
      '1Lo': 0,
      '1Eu': 0,
      '1F': 0,
      '1Lz': 0,
      '1A': 0,
      // other
      'ChSt1': 0,
    }
  });

  const isStepOptional = (step: number) => {
    return
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%', padding: '4em' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <FormProvider {...methods}>
            {React.createElement(pages[activeStep])}
          </FormProvider>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}