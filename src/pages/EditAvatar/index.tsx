import React from 'react';
import Avatar from 'avataaars';
import axios from 'axios';
import styles from './EditAvatar.module.scss';

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
		avatarStyle: 'Circle',
		topType: 'NoHair',
		accessoriesType: 'Blank',
		hairColor: 'Auburn',
		facialHairType: 'Blank',
		facialHairColor: 'Black',
		clotheType: 'GraphicShirt',
		clotheColor: 'White',
		graphicType: 'Hola',
		eyeType: 'WinkWacky',
		eyebrowType: 'Defalt',
		hatColor: 'Blank',
		mouthType: 'ScreamOpen',
		skinColor: 'Pale',
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

	async function handleSaveAvatar(event: React.FormEvent<HTMLButtonElement>) {
		event.preventDefault();
		const parsedUser = JSON.parse(localStorage.getItem('user') ?? '');
		parsedUser.avatar = initialAvatarOptions;
		await axios.post('http://localhost:8080/usuarios/atualizar-avatar', parsedUser)
			.then(response => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error.message);
			});
	}

	return (
		<div className={styles.tela}>
			<Avatar className={styles.avatar}  {...avatarOptions} />
			<div>
				<h1 className={styles.tela__titulo}>Personalize seu avatar:</h1>

				<div style={{ display: 'flex' }}>
					<h5> Tom da pele :</h5>
					<select className={styles.tela__selection}
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

				<div style={{ display: 'flex' }}>
					<h5> Tipos de cabelo e acessórios:</h5>
					<select className={styles.tela__selection}
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
				</div>

				<div style={{ display: 'flex' }}>
					<h5> Óculos:</h5>
					<select className={styles.tela__selection}
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
				</div>


				<div style={{ display: 'flex' }}>
					<h5> Cor do chapéu:</h5>
					<select className={styles.tela__selection}
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
				</div>



				<div style={{ display: 'flex' }}>
					<h5> Cor do cabelo:</h5>
					<select className={styles.tela__selection}
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
				</div>

				<div style={{ display: 'flex' }}>
					<h5> Tipo de barba:</h5>
					<select className={styles.tela__selection}
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
				</div>

				<div style={{ display: 'flex' }}>
					<h5> Cor da barba:</h5>
					<select className={styles.tela__selection} disabled={ avatarOptions.facialHairType == 'Blank' }
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
				</div>



				<div style={{ display: 'flex' }}>
					<h5> Tipo de camiseta:</h5>
					<select className={styles.tela__selection}
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
				</div>

				<div style={{ display: 'flex' }}>
					<h5> Cor da camiseta:</h5>
					<select className={styles.tela__selection}
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
				</div>

				<div style={{ display: 'flex' }}>
					<h5> Estampa camiseta:</h5>
					<select className={styles.tela__selection} disabled={ avatarOptions.clotheType != 'GraphicShirt' }
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
				</div>


				<div style={{ display: 'flex' }}>
					<h5> Olhar:</h5>
					<select className={styles.tela__selection}
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
				</div>

				<div style={{ display: 'flex' }}>
					<h5> Sombrancelha:</h5>
					<select className={styles.tela__selection}
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
				</div>

				<div style={{ display: 'flex' }}>
					<h5> Boca :</h5>
					<select className={styles.tela__selection}
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
				</div>

			</div>
			<div>
				<button onClick={ handleSaveAvatar }>Salvar </button>
			</div>
		</div>
	);

}
