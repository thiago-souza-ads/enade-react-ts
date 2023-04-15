import React from 'react';
import Avatar from 'avataaars';

const topTypes: string[] = [
	'NoHair',
	'Eyepatch',
	'Hat',
	'Hijab',
	'Turban',
	'WinterHat1',
	'WinterHat2',
	'WinterHat3',
	'WinterHat4',
	'LongHairBigHair',
	'LongHairBob',
	'LongHairBun',
	'LongHairCurly',
	'LongHairCurvy',
	'LongHairDreads',
	'LongHairFrida',
	'LongHairFro',
	'LongHairFroBand',
	'LongHairNotTooLong',
	'LongHairShavedSides',
	'LongHairMiaWallace',
	'LongHairStraight',
	'LongHairStraight2',
	'LongHairStraightStrand',
	'ShortHairDreads01',
	'ShortHairDreads02'
];
const accessoriesTypes: string[] = [
	'Blank',
	'Kurt',
	'Prescription01',
	'Prescription02',
	'Round',
	'Sunglasses',
	'Wayfarers'
];
const hatColors: string[] = [
	'Black',
	'Blue01',
	'Blue02',
	'Blue03',
	'Gray01',
	'Gray02',
	'Heather',
	'PastelBlue',
	'PastelGreen',
	'PastelOrange',
	'PastelRed',
	'PastelYellow',
	'Pink',
	'Red',
	'White'
];
const hairColors: string[] = [
	'Auburn',
	'Black',
	'Blonde',
	'BlondeGolden',
	'Brown',
	'BrownDark',
	'PastelPink',
	'Platinum',
	'Red',
	'SilverGray'
];
const facialHairTypes: string[] = [
	'Blank',
	'BeardMedium',
	'BeardLight',
	'BeardMajestic',
	'MoustacheFancy',
	'MoustacheMagnum'
];
const facialHairColors: string[] = [
	'Auburn',
	'Black',
	'Blonde',
	'BlondeGolden',
	'Brown',
	'BrownDark',
	'Platinum',
	'Red'
];
const clotheTypes: string[] = [
	'BlazerShirt',
	'BlazerSweater',
	'CollarSweater',
	'GraphicShirt',
	'Hoodie',
	'Overall',
	'ShirtCrewNeck',
	'ShirtScoopNeck',
	'ShirtVNeck'
];
const clotheColors: string[] = [
	'Black',
	'Blue01',
	'Blue02',
	'Blue03',
	'Gray01',
	'Gray02',
	'Heather',
	'PastelBlue',
	'PastelGreen',
	'PastelOrange',
	'PastelRed',
	'PastelYellow',
	'Pink',
	'Red',
	'White'
];
const graphicTypes: string[] = [
	'Bat',
	'Cumbia',
	'Deer',
	'Diamond',
	'Hola',
	'Pizza',
	'Resist',
	'Selena',
	'Bear',
	'SkullOutline',
	'Skull'
];
const eyeTypes: string[] = [
	'Close',
	'Cry',
	'Default',
	'Dizzy',
	'EyeRoll',
	'Happy',
	'Hearts',
	'Side',
	'Squint',
	'Surprised',
	'Wink',
	'WinkWacky'
];
const eyebrowTypes: string[] = [
	'Angry',
	'AngryNatural',
	'Default',
	'DefaultNatural',
	'FlatNatural',
	'RaisedExcited',
	'RaisedExcitedNatural',
	'SadConcerned',
	'SadConcernedNatural',
	'UnibrowNatural',
	'UpDown',
	'UpDownNatural'
];
const mouthTypes: string[] = [
	'Concerned',
	'Default',
	'Disbelief',
	'Eating',
	'Grimace',
	'Sad',
	'ScreamOpen',
	'Serious',
	'Smile',
	'Tongue',
	'Twinkle',
	'Vomit'
];
const skinColors: string[] = [
	'Tanned',
	'Yellow',
	'Pale',
	'Light',
	'Brown',
	'DarkBrown',
	'Black'
];

export default function EditAvatar() {
	type AvatarOptions = {
		accessoriesType: string;
		avatarStyle: string;
		clotheColor: string;
		clotheType: string;
		eyeType: string;
		eyebrowType: string;
		facialHairColor: string;
		facialHairType: string;
		graphicType: string;
		hairColor: string;
		hatColor: string;
		mouthType: string;
		skinColor: string;
		topType: string;
	};

	const initialAvatarOptions: AvatarOptions = {
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
		topType: 'Eyepatch',
	};


	const [avatarOptions, setAvatarOptions] = React.useState<AvatarOptions>(
		initialAvatarOptions
	);

	function handleOptionChange(fieldName: keyof AvatarOptions, value: string) {
		setAvatarOptions((prevAvatarOptions) => ({
			...prevAvatarOptions,
			[fieldName]: value,
		}));
	}

	return (
		<div>
			<Avatar style={{ width: '250px', height: '250px' }} {...avatarOptions} />
			<div style={{
				display: 'inline-grid',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
				<h1>Personalize seu avatar:</h1>
				<div style={{ display: 'flex' }}>
					<h5> Tipos de cabelo e acessórios:</h5>
				</div>
				<select
					value={avatarOptions.topType}
					onChange={(event) =>
						handleOptionChange('topType', event.target.value)
					}
				>
					{topTypes.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div style={{ display: 'flex' }}>
					<h5> Óculos:</h5>
				</div>
				<select
					value={avatarOptions.accessoriesType}
					onChange={(event) =>
						handleOptionChange('accessoriesType', event.target.value)
					}
				>
					{accessoriesTypes.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div style={{ display: 'flex' }}>
					<h5> Não sei:</h5>
				</div>
				<select
					value={avatarOptions.hatColor}
					onChange={(event) =>
						handleOptionChange('hatColor', event.target.value)
					}
				>
					{hatColors.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div style={{ display: 'flex' }}>
					<h5> Cor do cabelo:</h5>
				</div>
				<select
					value={avatarOptions.hairColor}
					onChange={(event) =>
						handleOptionChange('hairColor', event.target.value)
					}
				>
					{hairColors.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div style={{ display: 'flex' }}>
					<h5> Tipo de barba:</h5>
				</div>
				<select
					value={avatarOptions.facialHairType}
					onChange={(event) =>
						handleOptionChange('facialHairType', event.target.value)
					}
				>
					{facialHairTypes.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div style={{ display: 'flex' }}>
					<h5> Cor da barba:</h5>
				</div>
				<select
					value={avatarOptions.facialHairColor}
					onChange={(event) =>
						handleOptionChange('facialHairColor', event.target.value)
					}
				>
					{facialHairColors.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div style={{ display: 'flex' }}>
					<h5> Tipo de camiseta:</h5>
				</div>
				<select
					value={avatarOptions.clotheType}
					onChange={(event) =>
						handleOptionChange('clotheType', event.target.value)
					}
				>
					{clotheTypes.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div style={{ display: 'flex' }}>
					<h5> Cor da camiseta:</h5>
				</div>
				<select
					value={avatarOptions.clotheColor}
					onChange={(event) =>
						handleOptionChange('clotheColor', event.target.value)
					}
				>
					{clotheColors.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div style={{ display: 'flex' }}>
					<h5> AAAAA:</h5>
				</div>
				<select
					value={avatarOptions.graphicType}
					onChange={(event) =>
						handleOptionChange('graphicType', event.target.value)
					}
				>
					{graphicTypes.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div style={{ display: 'flex' }}>
					<h5> Olhar:</h5>
				</div>
				<select
					value={avatarOptions.eyeType}
					onChange={(event) =>
						handleOptionChange('eyeType', event.target.value)
					}
				>
					{eyeTypes.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div style={{ display: 'flex' }}>
					<h5> Sombrancelha:</h5>
				</div>
				<select
					value={avatarOptions.eyebrowType}
					onChange={(event) =>
						handleOptionChange('eyebrowType', event.target.value)
					}
				>
					{eyebrowTypes.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div style={{ display: 'flex' }}>
					<h5> AAAAA:</h5>
				</div>
				<select
					value={avatarOptions.mouthType}
					onChange={(event) =>
						handleOptionChange('mouthType', event.target.value)
					}
				>
					{mouthTypes.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
				<div style={{ display: 'flex' }}>
					<h5> AAAAA:</h5>
				</div>
				<select
					value={avatarOptions.skinColor}
					onChange={(event) =>
						handleOptionChange('skinColor', event.target.value)
					}
				>
					{skinColors.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
		</div>
	);

}
