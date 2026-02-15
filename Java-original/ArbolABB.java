public class ArbolABB{
	Nodo raiz;

	ArbolABB(){
		raiz=null;
	}

	public void insertar(int dato){
		if(raiz==null){
			raiz=new Nodo(dato);
		}else{
			if(raiz.dato>dato){
				raiz.h_izq=insertar(dato,raiz.h_izq);
			}else{
				raiz.h_der=insertar(dato,raiz.h_der);
			}
		}
	}
	private Nodo insertar(int dato,Nodo raiz){
		if(raiz==null){
			raiz=new Nodo(dato);
		}else{
			if(raiz.dato>dato){
				raiz.h_izq=insertar(dato,raiz.h_izq);
			}else{
				raiz.h_der=insertar(dato,raiz.h_der);
			}
		}
		return raiz;
	}
	public void preOrden(){
		if(raiz!=null){
			System.out.print(raiz.dato +"-");
			preOrden(raiz.h_izq);
			preOrden(raiz.h_der);
		}
		System.out.println("\n");
	}
	private void preOrden(Nodo raiz){
		if(raiz!=null){
			System.out.print(raiz.dato +"-");
			preOrden(raiz.h_izq);
			preOrden(raiz.h_der);
		}
	}
	public void Inorden(){
		if(raiz!=null){
			Inorden(raiz.h_izq);
			System.out.print(raiz.dato +"-");
			Inorden(raiz.h_der);
		}
		System.out.println("\n");
	}
	private void Inorden(Nodo raiz){
		if(raiz!=null){
			Inorden(raiz.h_izq);
			System.out.print(raiz.dato +"-");
			Inorden(raiz.h_der);
		}
	}
	public void postOrden(){
		if(raiz!=null){
			postOrden(raiz.h_izq);
			postOrden(raiz.h_der);
			System.out.print(raiz.dato +"-");
		}
		System.out.println("\n");
	}
	private void postOrden(Nodo raiz){
		if(raiz!=null){
			postOrden(raiz.h_izq);
			postOrden(raiz.h_der);
			System.out.print(raiz.dato +"-");
		}
	}
	public boolean buscar(int dato){
		return buscar(raiz,dato);
	}
	private boolean buscar(Nodo raiz, int dato){
		boolean buscar=false;
		if(raiz!=null){
			if(raiz.dato<=dato){
				buscar(raiz.h_der,dato);
				if(raiz.dato==dato){
					buscar=true;
				}
			}else{
				buscar(raiz.h_izq,dato);
				if(raiz.dato==dato){
					buscar=true;
				}
			}
		}
		return buscar;
	}
	public boolean eliminar(int a){
		Nodo aux=raiz;
		Nodo padre=raiz;
		boolean eliminado=false;
		while(aux.dato!=a){
			padre=aux;
			if(a<aux.dato){
				eliminado=true;
				aux=aux.h_izq;
			}else{
				eliminado=false;
				aux=aux.h_der;
			}
			if(aux==null){
				return false;
			}
		}//fin de ciclo
		if(aux.h_izq==null && aux.h_der==null){
			if(aux==raiz){
				raiz=null;
			}else if(eliminado){
				padre.h_izq=null;
			}else{
				padre.h_der=null;
			}
		}else if(aux.h_der==null){
			if(aux==raiz){
				raiz=aux.h_izq;
			}else if(eliminado){
				padre.h_izq=aux.h_izq;
			}else{
				padre.h_der=aux.h_izq;
			}
		}else if(aux.h_izq==null){
			if(aux==raiz){
				raiz=aux.h_der;
			}else if(eliminado){
				padre.h_izq=aux.h_der;
			}else{
				padre.h_der=aux.h_izq;
			}
		}else{
			Nodo reemplazo=obtenerNodoReemplazo(aux);
			if(aux==raiz){
				raiz=reemplazo;
			}else if(eliminado){
				padre.h_izq=reemplazo;
			}else{
				padre.h_der=reemplazo;
			}
			reemplazo.h_izq=aux.h_izq;
		}
		return true;
	}
	//metodo para obtener reemplazo
	public Nodo obtenerNodoReemplazo(Nodo rem){
		Nodo reemplazarPadre=rem;
		Nodo reemplazo=rem;
		Nodo aux=rem.h_der;
		while(aux!=null){
			reemplazarPadre=reemplazo;
			reemplazo=aux;
			aux=aux.h_izq;
		}
		if(reemplazo!=rem.h_der){
			reemplazarPadre.h_izq=reemplazo.h_der;
			reemplazo.h_der=rem.h_der;
		}
		System.out.println("el nodo reemplazo es: "+reemplazo);
		return reemplazo;
	}
}