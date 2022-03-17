// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

const root = new Vue(
	{
		el: '#root',
		data: {
			autoPlay:'',
			activeItem : 0,
			carouselItems : [
				{
					image: "https://picsum.photos/775/540?random=1",
					title: 'Lorem Ipsum',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perferendis est fugiat animi veniam, corrupti quaerat velit temporibus dolore soluta, corporis ullam magni',
				},
				{
					image: "https://picsum.photos/775/540?random=2",
					title: 'Lorem Ipsum',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perferendis est fugiat animi veniam, corrupti quaerat velit temporibus dolore soluta, corporis ullam magni',
				},
				{
					image: "https://picsum.photos/775/540?random=3",
					title: 'Lorem Ipsum',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perferendis est fugiat animi veniam, corrupti quaerat velit temporibus dolore soluta, corporis ullam magni',
				},
				{
					image: "https://picsum.photos/775/540?random=4",
					title: 'Lorem Ipsum',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perferendis est fugiat animi veniam, corrupti quaerat velit temporibus dolore soluta, corporis ullam magni',
				},
				{
					image: "https://picsum.photos/775/540?random=5",
					title: 'Lorem Ipsum',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perferendis est fugiat animi veniam, corrupti quaerat velit temporibus dolore soluta, corporis ullam magni',
				}
			],
		},
		methods: {
			slideNext : function (){
				if ( this.activeItem === this.carouselItems.length - 1 ){
						this.activeItem = 0;
					} else {
						this.activeItem++;
					}
			},
			slidePrev : function(){
				if ( this.activeItem === 0 ){
						this.activeItem = this.carouselItems.length - 1;
					} else {
						this.activeItem--;
					}
			}
		},
		mounted(){
			console.warn('mounted');
			autoPlay = setInterval(this.slideNext, 3000);
		},
	}
);