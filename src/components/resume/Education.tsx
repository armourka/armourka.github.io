import React from 'react'
import {CollapsableSection} from './CollapsableSection';
import { ContentLine } from './ContentLine';
// import {} from '../../assets/cornell-logo.png'
 

export const Education = () => {
  return (
  <CollapsableSection title="Education">
    <ContentLine
    title="Cornell University"
    image={<img width="100px" src={require("../../assets/cornell-logo.png")}/>}
    />
  </CollapsableSection>
);
}