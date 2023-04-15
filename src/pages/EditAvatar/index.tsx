import React from 'react';
import Avatar from 'avataaars';

function EditAvatar() {
	const avatarOptions = {
		accessoriesType: 'Round',
		avatarStyle: 'Circle',
		clotheColor: 'PastelGreen',
		clotheType: 'ShirtCrewNeck',
		eyeType: 'Side',
		eyebrowType: 'UpDown',
		facialHairColor: 'Auburn',
		facialHairType: 'MoustacheMagnum',
		graphicType: 'Hola',
		hairColor: 'PastelPink',
		hatColor: 'Gray02',
		mouthType: 'ScreamOpen',
		skinColor: 'Pale',
		topType: 'Eyepatch'
	};

	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
			<Avatar style={{ width: '250px', height: '250px' }} {...avatarOptions} />
			<select>

			</select>
		</div>
	);
}

export default EditAvatar;
