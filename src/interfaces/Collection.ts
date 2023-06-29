export default interface ICollection {
  id: string;
  imgage: string;
  title: string;
  userId: string;
}

export interface IVocabularyItem {
  id: string;
  vocabulary: string;
  meaning: string;
  image: string | null;
  spelling: string;
  synonyms: string[];
  collectionId: string;
}
