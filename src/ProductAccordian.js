import Accordion from 'react-bootstrap/Accordion';
import MapHTML from './MapHTML';

const ProductAccordian = ({ product }) => {
    // Assuming 'project' is an array property of 'product'
    const project = product.project || [];

    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Map</Accordion.Header>
                <Accordion.Body>
                    <div>
                        <MapHTML 
                            mapHTML={product.mapHTML} 
                            location={product.location} 
                            locationDetails={product.locationDetails} 
                        />
                    </div> 
                </Accordion.Body>
            </Accordion.Item>
            
            {project.length > 1 && (
                <Accordion.Item eventKey="1">
                    <Accordion.Header>About {project[0]} </Accordion.Header>
                    <Accordion.Body>
                        {project[1]}
                    </Accordion.Body>
                </Accordion.Item>
            )}
        </Accordion>
    );
}
    
export default ProductAccordian;

