document.getElementById('searchInput').ad-
dEventListener('keyup', function() {
let filter =this.value.tolowerCase();
let items =
document.getElementById('searchlist').get-
ElementByTagName('li');
for(let i = 0; i < items.length; i++)
{
    let items = items[i];
    if
(item.textContent.tolowerCase().includs(filter
)) {{

    item.classlist.remove('hidden');
    } else {
        item.classlist.add('hidden');
    }   
}
});   