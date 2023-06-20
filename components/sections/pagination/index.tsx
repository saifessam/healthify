import Button from '../../button';
import './styles.css';

export default function ShowMoreSection() {
	return <section id="show-more"><Button style={{ theme: "primary", shape: "normal", bordered: false }} content={"Show more doctors"} action={() => { }} /></section>;
}
