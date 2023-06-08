export const moveLeft = () => {
    const cardsPage = document.getElementById("cards")
    cardsPage.classList.toggle("right")
}
export const moveFormRight = () => {
    const cardsPage = document.getElementById("formu")
    cardsPage.classList.toggle("left")
}