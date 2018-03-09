import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  tupla;
  nomes = new Array();
  links = new Array();
  requisicao = false;

  ngOnInit() {
    try {
      this.http.get('https://github.com/pedrobotolli?tab=repositories', {responseType:'text'}).subscribe(data => {
      console.log(data);
      this.getProjetos(data);
    });
    } catch (error) {
      this.requisicao = false;
    }
  }

  getProjetos(data: string) {
    let proj = data.split('<ul data-filterable-for="your-repos-filter" data-filterable-type="substring">');
    // projetos = data.split('title="');
    // projetos = projetos.split('</ol>');
    // const filtrado = projetos.filter(this.contemTag);
    
    proj = proj[1].split('</ul>');
    proj = proj[0].split('</li>');
    proj = proj.slice(0, -1);
    /*
    proj = proj.filter(this.contemTag);
    */
    proj.forEach(element => {
      let links = element.split('<a href="');
      links = links[1].split('" ');
      const link = 'https://github.com' + links[0];
      console.log(link);
      this.links.push(link);

      let nomes = element.split('itemprop="name codeRepository">');
      nomes = nomes[1].split('</a>');
      console.log(nomes[0]);
      this.nomes.push(nomes[0]);
    });
    let tupla = new Array();
    for (let i = 0; i < this.nomes.length; i++) {
      tupla.push([this.nomes[i], this.links[i]]);
    }

    this.tupla = tupla;

    console.log(proj);
    this.requisicao = true;
  }


  contemTag(value: string) {
    return (value.includes('<li'));
  }

  // <span class="repo js-repo" title="trabalho-haskell">trabalho-haskell</span>

}
