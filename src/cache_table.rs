#[derive(Copy, Clone, PartialEq, PartialOrd)]
struct CacheTableEntry<T: Copy + Clone + PartialEq + PartialOrd> {
    hash: u64,
    entry: T,
}

/// Store a cache of entries, each with an associated hash.
pub struct CacheTable<T: Copy + Clone + PartialEq + PartialOrd> {
    table: Box<[CacheTableEntry<T>]>,
    mask: usize,
}

impl<T: Copy + Clone + PartialEq + PartialOrd> CacheTable<T> {
    /// Create a new `CacheTable` with each associated entry initialized with a hash of '0'
    /// Note: You must pass in a size where only 1 bit is set. (AKA: 2, 4, 8, 16, 1024, 65536,
    /// etc.)
    /// Panics when size is invalid.
    pub fn new(size: usize, default: T) -> CacheTable<T> {
        if size.count_ones() != 1 {
            panic!("You cannot create a CacheTable with a non-binary number.");
        }
        let values = vec![
            CacheTableEntry {
                hash: 0,
                entry: default
            };
            size
        ];
        CacheTable {
            table: values.into_boxed_slice(),
            mask: size - 1,
        }
    }

    /// Get a particular entry with the hash specified
    pub fn get(&self, hash: u64) -> Option<T> {
        let entry = unsafe { *self.table.get_unchecked((hash as usize) & self.mask) };
        if entry.hash == hash {
            Some(entry.entry)
        } else {
            None
        }
    }

    /// Add (or overwrite) an entry with the associated hash
    pub fn add(&mut self, hash: u64, entry: T) {
        let e = unsafe { self.table.get_unchecked_mut((hash as usize) & self.mask) };
        *e = CacheTableEntry {
            hash: hash,
            entry: entry,
        };
    }
}
