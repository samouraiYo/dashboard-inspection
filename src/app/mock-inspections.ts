import { Inspection } from './models/inspection'

export const INSPECTIONS: Inspection[] = [
	{
		id: 1000001,
		statut: 'ouvert',
		type: 'INSPCVT',
		designation: 'Examen visuel interne & externe',
		datePrevue: '2018-10-18T00:00:00.000Z',
		ordre: {
			id : 4886501
		},
		avis: {
			id: 11203545,
			type: 'YI',
			cycle : 60,
			last_inspection: '2013-10-31T00:00:00.000Z',
			next_inspection: '2018-10-31T00:00:00.000Z'
		},
		posteTechnique: {
			id : 'AFJA-EB5A-E1039-1',
			designation: 'REFREGERANT INTERETAGE C1039'
		},
		equipement: {
			id: 10267079,
			designation: 'CALANDRE ECHANGEUR'
		}
	}
	,
	{
		id: 1000002,
		statut: 'ouvert',
		type: 'INSPCUE',
		designation: 'Controle US d\'épaisseur',
		datePrevue: '2018-10-19T00:00:00.000Z',
		ordre: {
			id : 4886501
		},
		avis: {
			id: 11203545,
			type: 'YI',
			cycle : 60,
			last_inspection: '2013-10-31T00:00:00.000Z',
			next_inspection: '2018-10-31T00:00:00.000Z'
		},
		posteTechnique: {
			id : 'AFJA-EB5A-E1039-1',
			designation: 'REFREGERANT INTERETAGE C1039'
		},
		equipement: {
			id: 10267079,
			designation: 'CALANDRE ECHANGEUR'
		}
	}
	,
	{
		id: 1000003,
		statut: 'ouvert',
		type: 'INSPCVT',
		designation: 'CONTROLE VISUEL EXTERNE-INTERNE',
		datePrevue: '2018-10-21T00:00:00.000Z',
		ordre: {
			id : 4886458
		},
		avis: {
			id: 11203540,
			type: 'YI',
			cycle : 60,
			last_inspection: '2013-10-31T00:00:00.000Z',
			next_inspection: '2018-10-31T00:00:00.000Z'
		},
		posteTechnique: {
			id : 'AFJA-EB4D-S1039-1',
			designation: 'S1036 FILTRATION SECONDAIRE'
		},
		equipement: {
			id: 10215169,
			designation: 'FILTRE IT 11110890 ECHANGEUR'
		}
	}
	,
	{
		id: 1000004,
		statut: 'ouvert',
		type: 'INSPCTD',
		designation: 'REVISION ET TARAGE',
		datePrevue: '2018-10-20T00:00:00.000Z',
		ordre: {
			id : 4886459
		},
		avis: {
			id: 11105083,
			type: 'YV',
			cycle : 60,
			last_inspection: '2013-10-31T00:00:00.000Z',
			next_inspection: '2018-10-31T00:00:00.000Z'
		},
		posteTechnique: {
			id: 'AFJA-EB4D-S1039-1',
			designation: 'PROTEC. SOUPAPAE SOLV. SORTIE S61'
		},
		equipement: {
			id: 10215169,
			designation: 'SOUPAPE SP528'
		}
	}
];