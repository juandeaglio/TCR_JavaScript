export function unpause(elements: HTMLCollectionOf<Element> | Element): void
{
    if (elements instanceof HTMLCollection )
    {
        const element_array: Element[] = Array.from(elements);
        element_array.forEach((element) =>
        {
            element.classList.remove("pause-animation");
        });
    }
    else if (elements instanceof Element){
        elements.classList.remove("pause-animation")
    }
}
export function pause(elements: HTMLCollectionOf<Element> | Element): void
{
    if (elements instanceof HTMLCollection )
    {
        const element_array: Element[] = Array.from(elements);
        element_array.forEach((element) =>
        {
            element.classList.add("pause-animation");
        });
    }
    else if (elements instanceof Element){
        elements.classList.add("pause-animation")
    }
}

export function getAllPaused(document: HTMLElement): HTMLCollectionOf<Element>
{
    return document.getElementsByClassName("pause-animation");
}

export function getAllMoveables(document: HTMLElement): HTMLCollectionOf<Element>
{
    return document.getElementsByClassName("moveable");
}