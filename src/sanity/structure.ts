import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Genuine Graphics')
    .items([
      S.documentTypeListItem('beautifulWorks').title('Beautiful Works'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['beautifulWorks'].includes(item.getId()!),
      ),
    ])
