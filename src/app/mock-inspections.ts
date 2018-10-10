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
	,
	{
		id: 1000005,
		statut: 'ouvert',
		type: 'INSPCTD',
		designation: 'CONTROLE VISUEL EXTERNE ET INTERNE',
		datePrevue: '2018-10-18T00:00:00.000Z',
		ordre: {
			id : 4886500
		},
		avis: {
			id: 11203542,
			type: 'YI',
			cycle : 60,
			last_inspection: '2013-10-31T00:00:00.000Z',
			next_inspection: '2018-10-31T00:00:00.000Z'
		},
		posteTechnique: {
			id: 'AFJA-EA4D-S36-1',
			designation: 'S36.1 FILTRATION SECONDAIRE'
		},
		equipement: {
			id: 10213150,
			designation: 'FILTRE SECONDAIRE IT 11110876'
		}
	}
	,
	{
		id: 1000006,
		statut: 'ouvert',
		type: 'INSPCUE',
		designation: 'CONTROLE US D\'EPAISSEUR',
		datePrevue: '2018-10-17T00:00:00.000Z',
		ordre: {
			id : 4886505
		},
		avis: {
			id: 11186822,
			type: 'YI',
			cycle : 60,
			last_inspection: '2013-10-31T00:00:00.000Z',
			next_inspection: '2018-10-31T00:00:00.000Z'
		},
		posteTechnique: {
			id: 'AFJA-EB5A-N1039-3',
			designation: 'SILENCIEUX REFOULEMENT C1039N'
		},
		equipement: {
			id: 10267082,
			designation: 'SILENCIEUX REFOULEMENT 1N1039-3'
		}
	}
	,
	{
		id: 1000007,
		statut: 'ouvert',
		type: 'INSPCVT',
		designation: 'CONTROLE VISUEL EXTERNE ET INTERNE',
		datePrevue: '2018-10-17T00:00:00.000Z',
		ordre: {
			id : 4886505
		},
		avis: {
			id: 11186822,
			type: 'YI',
			cycle : 60,
			last_inspection: '2013-10-31T00:00:00.000Z',
			next_inspection: '2018-10-31T00:00:00.000Z'
		},
		posteTechnique: {
			id: 'AFJA-EB5A-N1039-3',
			designation: 'SILENCIEUX REFOULEMENT C1039N'
		},
		equipement: {
			id: 10267082,
			designation: 'SILENCIEUX REFOULEMENT 1N1039-3'
		}
	}
	,
	{
		id: 1000007,
		statut: 'ouvert',
		type: 'INSPCVT',
		designation: 'EXAMEN VISUEL INTERNE ET EXTERIEUR',
		datePrevue: '2018-10-19T00:00:00.000Z',
		ordre: {
			id : 4886504
		},
		avis: {
			id: 11186823,
			type: 'YI',
			cycle : 48,
			last_inspection: '2013-10-31T00:00:00.000Z',
			next_inspection: '2018-10-31T00:00:00.000Z'
		},
		posteTechnique: {
			id: 'AFJA-EB5A-S1039-2',
			designation: 'SEPARATEUR AIR PROCEDE C1039'
		},
		equipement: {
			id: 10267083,
			designation: 'SEPARATEUR 1S1039-2'
		}
	}
	,
	{
		id: 1000008,
		statut: 'ouvert',
		type: 'INSPCUE',
		designation: 'CONTROLE US MESURE D\'EPAISSEUR',
		datePrevue: '2018-10-19T00:00:00.000Z',
		ordre: {
			id : 4886504
		},
		avis: {
			id: 11186823,
			type: 'YI',
			cycle : 48,
			last_inspection: '2013-10-31T00:00:00.000Z',
			next_inspection: '2018-10-31T00:00:00.000Z'
		},
		posteTechnique: {
			id: 'AFJA-EB5A-S1039-2',
			designation: 'SEPARATEUR AIR PROCEDE C1039'
		},
		equipement: {
			id: 10267083,
			designation: 'SEPARATEUR 1S1039-2'
		}
	}
];