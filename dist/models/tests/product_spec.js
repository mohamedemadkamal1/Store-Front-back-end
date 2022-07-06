"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
const product_1 = require("../product");
const storage = new product_1.ProductStorage();
describe('Product Model', () => {
    it('should have an index method', () => {
        expect(storage.index).toBeDefined();
    });
    it('should have an show method', () => {
        expect(storage.show).toBeDefined();
    });
    it('should have an create method', () => {
        expect(storage.create).toBeDefined();
    });
    it('should have an update method', () => {
        expect(storage.update).toBeDefined();
    });
    it('should have an index method', () => {
        expect(storage.delete).toBeDefined();
    });
    it('should create a product', async () => {
        const result = await storage.create({
            id: 1,
            name: 'Milk',
            price: '10'
        });
        expect(result).toEqual({
            id: 1,
            name: 'Milk',
            price: '10'
        });
    });
});
