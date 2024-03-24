import { Component, OnInit } from "@angular/core";
import { QuoteService } from "../quote-service";
import { Quote } from "../quote";
import { RouterLinkActive } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgStyle } from "@angular/common";


@Component({
    selector: 'quote',
    providers: [RouterLinkActive, HttpClient, NgStyle],
    templateUrl: './quote.component.html',
    styleUrl: './quote.component.css'
})
export class QuoteComponent implements OnInit {

    letters = '0123456789ABCDEF';
    color = '#';
    quote: Quote = { quote: '', author: '', category:''};

    constructor(private service: QuoteService){}

    ngOnInit(): void {
        this.service.getColor()
        .subscribe(color => {
            this.color = color;
            console.log("color change")}
            );
        console.log('quote component onInit called');
        this.getRandomQuote();
        this.changeColors();
    }


    getRandomQuote(){
        this.service.getQuote()
        .subscribe(quote => {
            this.quote = quote[0];
        })
    }

    changeColors() {
        this.color = '#'; // <-----------
        for (var i = 0; i < 6; i++) {
            this.color += this.letters[Math.floor(Math.random() * 16)];
        }
        this.service.setColor(this.color);   
    }


}