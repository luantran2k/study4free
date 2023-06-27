export interface IAudioData {
  audio: string;
  sourceUrl: string;
  license: ILicense;
  text?: string;
}

export interface ILicense {
  name: string;
  url: string;
}

export interface IPhonetics {
  audio: string;
  sourceUrl: string;
  license: ILicense;
}

export interface IDefinition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

export interface IPartOfSpeech {
  partOfSpeech: string;
  definitions: IDefinition[];
}

export interface IMeaning {
  partOfSpeech: string;
  definitions: IDefinition[];
}

export interface IWordData {
  phonetics: IPhonetics[];
  meanings: IMeaning[];
}
