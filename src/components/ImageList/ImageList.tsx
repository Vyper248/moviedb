import { Image, Tab } from "semantic-ui-react";

import type { Image as ImageType } from "../../../types";

type ImageListProps = {
	images: {
		backdrops: ImageType[];
        logos: ImageType[];
        posters: ImageType[];
	}
}

const ImageList = ({images}: ImageListProps) => {
	const paneStyle = {maxHeight: '500px', overflow: 'auto', textAlign: 'center'};

	const tabContent = [
		{menuItem: 'Backdrops', render: () => {
			return (
				<Tab.Pane style={paneStyle}>
					<Image.Group size='small'>
					{
						images.backdrops.map(image => <Image key={image.file_path} src={`https://image.tmdb.org/t/p/w780${image.file_path}`} href={`https://image.tmdb.org/t/p/original${image.file_path}`} target='_blank' alt='backdrop'/>)
					}
					</Image.Group>
				</Tab.Pane>
			)
		}},
		{menuItem: 'Posters', render: () => {
			return (
				<Tab.Pane style={paneStyle}>
					<Image.Group size='small'>
					{
						images.posters.map(image => <Image key={image.file_path} src={`https://image.tmdb.org/t/p/w780${image.file_path}`} href={`https://image.tmdb.org/t/p/original${image.file_path}`} target='_blank' alt='poster'/>)
					}
					</Image.Group>
				</Tab.Pane>
			)
		}},
		{menuItem: 'Logos', render: () => {
			return (
				<Tab.Pane style={paneStyle}>
					<Image.Group size='small'>
					{
						images.logos.map(image => <Image key={image.file_path} src={`https://image.tmdb.org/t/p/w780${image.file_path}`} href={`https://image.tmdb.org/t/p/original${image.file_path}`} target='_blank' alt='logo'/>)
					}
					</Image.Group>
				</Tab.Pane>
			)
		}},
	]

	return (
		<div>
			<Tab panes={tabContent}/>
		</div>
	);
}

export default ImageList;
