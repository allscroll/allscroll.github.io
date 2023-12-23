
// генерация менюшки
const aMenuList = [
    { 'text': 'GIT', 'href': '/git.html' },
    { 'text': 'JavaScript', 'href': '/js.html' },
    // { 'text': 'Bitrix', 'href': '' },
    // { 'text': 'Bitrix', 'href': '' },
];

const menuContainer = document.getElementById( 'sidebar' );
const menuList = document.createElement( 'ul' );

menuContainer.appendChild( menuList );

aMenuList.forEach( ( item ) => {
    const menuItem = document.createElement( 'li' ),
          menuLink = document.createElement( 'a' );

    menuItem.classList.add( 'item' );

    menuLink.textContent = item.text;
    menuLink.setAttribute( 'href', item.href );

    menuItem.appendChild( menuLink );
    menuList.appendChild( menuItem );
} );

// оглавление
// собрать все заголовки и сгенерить список
