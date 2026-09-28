import { MeasuresContainer, Measure, MeasureText, MeasureLabel } from "./styles"

const WeightAndHeightContainer = ({weight, height}) => {

    return (
        <MeasuresContainer>
          <Measure>
            <MeasureText>{(weight * 0.454).toFixed(2)} KG</MeasureText>
            <MeasureLabel>Weight</MeasureLabel>
          </Measure>
          <Measure>
            <MeasureText>{(height * 2.54).toFixed(2)} cm</MeasureText>
            <MeasureLabel>Height</MeasureLabel>
          </Measure>
        </MeasuresContainer>
    );

}

export default WeightAndHeightContainer;