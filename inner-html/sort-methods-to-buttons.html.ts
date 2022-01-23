import { ISortingFuncVO } from '@interfaces';
const drawButton = (id: string, buttonVO: ISortingFuncVO) => {
  return `<button class="btn" id="${id}">
            <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <span>${buttonVO.caption}</span>
          </button>`;
};
export const drawButtons = (
  appDiv: HTMLElement,
  buttonsVO: ISortingFuncVO[]
): void => {
  for (let btnIdx = 0; btnIdx < buttonsVO.length; btnIdx++) {}
};
