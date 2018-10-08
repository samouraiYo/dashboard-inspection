import { Component, OnInit } from '@angular/core';
import { Ordre } from './ordre';
import { Avis } from './avis';
import { PosteTechnique } from './posteTechnique';
import { Equipement } from './equipement';

export class Inspection {
	id: number;
	statut: string;
	type: string;
	designation: string;
	datePrevue: string;
	ordre: Ordre;
	avis: Avis;
	posteTechnique: PosteTechnique;
	equipement: Equipement;
}