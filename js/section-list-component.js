import createInputListComponent from './input-list-component.js';

/**
 * Create section-list component.
 *
 * @param {HTMLElement} container
 */
export default function (container) {
  const templateElem = container.querySelector('.app-tmp-section-component');

  if (templateElem === null) {
    throw new Error('Template .app-tmp-number-component is not found');
  }

  const sectionListContainer = templateElem.parentElement;

  if (sectionListContainer === null) {
    throw new Error('Template .app-tmp-number-component does not have parent');
  }

  const createSectionContainer = () => {
    const sectionContainer =
      templateElem.content.cloneNode(true).firstElementChild;

    sectionContainer.addEventListener('click', (ev) => {
      if (ev.target?.matches?.('.app-cmd-remove-section') ?? false) {
        sectionContainer.remove();
      }
    });

    createInputListComponent(sectionContainer);

    sectionListContainer.append(sectionContainer);
  }

  container.addEventListener('click', (ev) => {
    if (ev.target?.matches?.('.app-cmd-add-section') ?? false) {
      createSectionContainer();
    }
  });

  createSectionContainer();
}