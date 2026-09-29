import React from 'react';
import { MeasuresContainer, Measure, MeasureText, MeasureLabel } from './styles';
import { decimetersToCm, hectogramsToKg } from '../../utils';

const WeightAndHeightContainer = ({ weight, height }) => {

    return (
        <MeasuresContainer>
          <Measure>
            <MeasureText>{hectogramsToKg(weight)} kg</MeasureText>
            <MeasureLabel>Weight</MeasureLabel>
          </Measure>
          <Measure>
            <MeasureText>{decimetersToCm(height)} cm</MeasureText>
            <MeasureLabel>Height</MeasureLabel>
          </Measure>
        </MeasuresContainer>
    );

};

export default WeightAndHeightContainer;
