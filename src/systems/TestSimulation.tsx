export function unpause(elements: HTMLCollectionOf<Element>): void
{
    const element_array: Element[] = Array.from(elements);
    element_array.forEach((element) =>
    {
        element.classList.remove("pause-animation");
    });
}
export function pause(elements: HTMLCollectionOf<Element>): void
{
    const element_array: Element[] = Array.from(elements);
    element_array.forEach((element) =>
    {
        element.classList.add("pause-animation");
    });
}

export function getAllPaused(document: HTMLElement): HTMLCollectionOf<Element>
{
    return document.getElementsByClassName("pause-animation");
}

export function getAllMoveables(document: HTMLElement): HTMLCollectionOf<Element>
{
    return document.getElementsByClassName("moveable");
}