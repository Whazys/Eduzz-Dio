// Types
// Interfaces

// interface IAnimal {
//   nome: string;
//   tipo: 'terrestre' | 'aquático';
//   domestico: boolean;
// }

// interface IFelinos extends IAnimal {
//   visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//   visaoNoturna: boolean;
//   porte: 'pequeno' | 'medio' | 'grande';
// }

// type IDomestico = IFelinos | ICanino;

// const animal: IDomestico = {
//   domestico: true,
//   nome: 'cachorro',
//   porte: 'medio',
//   tipo: 'terrestre',
//   visaoNoturna: true, 
// }

// const input = document.createElement('input') as HTMLInputElement;

// input.addEventListener('input', (event) => {
//   console.log('digitei')
//   const i = event.currentTarget as HTMLInputElement;
//   console.log(i.value)
// });

// Generc types
// function adicionaApendiceALista<T>(arry: T[], valor: T){
//   return arry.map(() => valor);
// }

// adicionaApendiceALista(['A', 'B', 'C'], 'd')

// interface IUsuario {
//   id: string;
//   email: string;
//   cargo: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'
// }
// function redirecione(usuario: IUsuario){
//   if (usuario.cargo) {}
// }

// interface Cachorro {
//   nome: string;
//   idade: number;
//   parqueFavorito?: string;
// }

// type CachorroSometeLeitura = {
//   readonly [K in keyof Cachorro]-?: Cachorro[K];
// }


// class meuCachorro implements Cachorro {
//   idade;
//   nome;

//   constructor(name, idade){
//     this.nome = this.nome;
//     this.idade = idade;
//   }
// }

// const cao = new meuCachorro('Apolo', 14);


