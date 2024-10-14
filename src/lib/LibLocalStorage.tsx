export class LibLocalStorage {
    // Write data to localStorage (key-value pair)
    static write<T>(key: string, value: T): void {
      try {
        const serializedValue = JSON.stringify(value); // Convert value to a JSON string
        localStorage.setItem(key, serializedValue);
      } catch (error) {
        console.error(`Error writing to localStorage: ${error}`);
      }
    }
  
    // Read data from localStorage
    static read<T>(key: string): T | null {
      try {
        const item = localStorage.getItem(key);
        if (item) {
          return JSON.parse(item) as T; // Convert JSON string back to object
        }
        return null;
      } catch (error) {
        console.error(`Error reading from localStorage: ${error}`);
        return null;
      }
    }
  
    // Remove data from localStorage
    static remove(key: string): void {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing from localStorage: ${error}`);
      }
    }
  }
  
  
  