/**
 * คลาส Book สำหรับเก็บข้อมูลหนังสือ
 */
class Book {
    private isbn: string;
    private title: string;
    private author: string;
    private price: number;

    constructor(isbn: string, title: string, author: string, price: number) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.price = price;
    }

    // Getter methods เพื่อให้ Cart สามารถเข้าถึงข้อมูลได้
    public getIsbn(): string {
        return this.isbn;
    }

    public getTitle(): string {
        return this.title;
    }

    public getPrice(): number {
        return this.price;
    }
}

/**
 * คลาส Cart สำหรับจัดการตะกร้าสินค้า
 * มีความสัมพันธ์แบบ Composition กับ Book
 */
class Cart {
    private cartId: string;
    private books: Book[];

    constructor(cartId: string) {
        this.cartId = cartId;
        this.books = []; // รายการหนังสือจะเกิดขึ้นและดับไปพร้อมกับ Cart
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getTotalPrice(): number {
        return this.books.reduce((sum, book) => sum + book.getPrice(), 0);
    }

    public getInfo(): void {
        console.log("=== ใบเสร็จรับเงิน ===");
        console.log(`รหัสตะกร้า: ${this.cartId}`);
        console.log("รายการ:");
        this.books.forEach(book => {
            console.log(`- ${book.getTitle()} (${book.getIsbn()}): ${book.getPrice()} บาท`);
        });
        console.log(`ราคารวม: ${this.getTotalPrice()} บาท`);
    }
}

// --- ส่วนการสร้าง Object และแสดงผล (Implementation) ---

// 1. สร้างหนังสือ
const book1 = new Book("978-0132350884", "Clean Code", "Robert C. Martin", 450);
const book2 = new Book("978-1234567890", "TypeScript Deep Dive", "Basarat Ali Syed", 320);

// 2. สร้างตะกร้าและเพิ่มหนังสือ
const myCart = new Cart("CO01");
myCart.addBook(book1);
myCart.addBook(book2);

// 3. แสดงข้อมูลใบเสร็จ
myCart.getInfo();


