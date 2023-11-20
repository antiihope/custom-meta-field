import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
export default function Edit() {
	const postType = useSelect( ( select ) => {
		return select( 'core/editor' ).getCurrentPostType();
	}, [] );

	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
	const subTitleValue = meta?._blocks_course_post_subtitle;

	const onSubTitleChange = ( value ) => {
		setMeta( { ...meta, _blocks_course_post_subtitle: value } );
	};

	return (
		<div { ...useBlockProps() }>
			{ subTitleValue || subTitleValue === '' ? (
				<TextControl
					label="Enter a post Subtitle"
					value={ subTitleValue }
					onChange={ onSubTitleChange }
				/>
			) : (
				<p>
					Meta field is not registered. Please register the meta field
					in the post type.
				</p>
			) }
		</div>
	);
}
