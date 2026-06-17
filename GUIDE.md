# 📘 hardvanta — Project Guide (Hinglish)

Ye file poore project ka workflow samjhati hai. Naye laptop pe kaise chalana hai,
login kaise hota hai, Supabase kaise use karna hai, image kaise dalni hai, aur
code kaise kaam karta hai — sab yahan likha hai.

> **Note:** Ye ek **Next.js 14 + Prisma + Supabase (PostgreSQL) + NextAuth + Razorpay**
> wala fullstack e-commerce store hai. Frontend aur backend dono isi ek project me hai.

---

## 🟢 1. Naye laptop pe project chalana (First time setup)

### Step 1 — Tools install karo
- **Node.js** (LTS version): https://nodejs.org
- **Git**: https://git-scm.com/download/win
- **VS Code**: https://code.visualstudio.com

### Step 2 — Code download karo (clone)
Terminal (PowerShell ya Git Bash) kholo aur:
```bash
git clone https://github.com/vickycodes-lab/hardvanta.git
cd hardvanta
npm install
```

### Step 3 — Secret files banao (ZAROORI)
GitHub pe `.env` aur `.env.local` **kabhi nahi jaate** (secret hain). Inhe **khud
banana** padta hai. Project ke root folder me (jahan `package.json` hai) ye 2 files
banao:

**File 1: `.env`**  (ye Prisma ke liye hai)
```
DATABASE_URL="<Supabase pooler URL, port 6543>"
DIRECT_URL="<Supabase direct URL, port 5432>"
```

**File 2: `.env.local`**  (ye website ke liye hai — isme SAB keys aati hain)
```
DATABASE_URL="<same as above, port 6543>"
DIRECT_URL="<same as above, port 5432>"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="<koi lamba random string>"
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
RAZORPAY_KEY_ID=""
RAZORPAY_KEY_SECRET=""
NEXT_PUBLIC_SUPABASE_URL=""
SUPABASE_SERVICE_ROLE_KEY=""
```

> ⚠️ **BAHUT IMPORTANT:** `.env` aur `.env.local` dono me `DATABASE_URL` **bilkul
> same hona chahiye**. Agar alag hue to website ek database me likhegi aur scripts
> doosre me dekhenge — phir "user not found" jaise errors aayenge.

> 💡 Sabse aasaan: project owner apni `.env` aur `.env.local` files WhatsApp/USB se
> bhej de, aur friend wahi files apne folder me paste kar de. Same database use hoga.

### Step 4 — Database client banao aur chalao
```bash
npx prisma generate
npm run dev
```
Browser me kholo: **http://localhost:3000** ✅

---

## 🔄 2. Roz ka Git workflow (Team rules)

Do log saath kaam kar rahe hain, to in rules ko follow karo warna code tut jaata hai:

1. **Kaam shuru karne se pehle hamesha:**
   ```bash
   git pull origin main
   ```
2. **Push karne se pehle hamesha build check karo:**
   ```bash
   npm run build
   ```
   Agar `Failed` ya `error` aaye to **push mat karo** — pehle theek karo.
3. **Apna kaam push karo:**
   ```bash
   git add -A
   git commit -m "kya kiya wo likho"
   git push origin main
   ```
4. **Kabhi bhi file me `<<<<<<<` ya `>>>>>>>` dikhe** to wo **conflict marker** hai —
   matlab merge adhoora hai. Use hatao, sahi code rakho, phir commit karo.
5. Dono ek hi file ek hi time pe edit mat karo.

### Agar "Please move or remove before merge" / stash error aaye:
```bash
git stash --include-untracked
git pull origin main
```
Ya phir code ko GitHub jaisa exact banane ke liye (local changes hat jaayenge):
```bash
git fetch origin
git reset --hard origin/main
```

---

## 🔐 3. Login / Register kaise kaam karta hai

- **Register** (`/register`): naam, email, password daalo → account ban jaata hai.
  Password **bcrypt** se hash hokar database me save hota hai (plain password kabhi
  store nahi hota).
- **Login** (`/login`): email + password → sahi hua to login, galat hua to
  "Invalid email or password".
- Accounts **database me** hain (per-laptop nahi). Same database use karne wale
  dono laptops pe wahi account chalega.

### Admin kaise banein (dashboard kholne ke liye)
Sabse pakka tareeka — **Supabase se** (script ki zaroorat nahi):
1. https://supabase.com/dashboard → `hardvanta` project → **Table Editor**
2. **`User`** table kholo → apni email wali row dhoondo
3. **`role`** column me `USER` ko **`ADMIN`** kar do → save
4. Website pe **logout karke wapas login** karo → navbar me "Admin" link aa jayega

---

## 🗄️ 4. Supabase kaise use karein

Supabase aapka **online database + image storage** hai. Sara data yahin hai.

### Login
- https://supabase.com → login → `hardvanta` project kholo

### Data dekhna
- **Table Editor** (grid icon) → tables: `Product`, `User`, `Order`, `OrderItem`,
  `CartItem`, `Category`. Koi bhi table click karke rows dekho/edit karo.
- Ya local tool: terminal me `npx prisma studio` → http://localhost:5555

### Connection string (DATABASE_URL) kahan se milti hai
- Upar green **Connect** button → connection strings copy karo
  - Pooler (port **6543**) → `DATABASE_URL`
  - Direct (port **5432**) → `DIRECT_URL`
- URL me `[YOUR-PASSWORD]` ko apne DB password se replace karo. Agar password me
  special characters (`! ? , % #`) hain to unhe URL-encode karna padta hai.

---

## 📸 5. Product image kaise dalein

Images ek **URL (link)** ke roop me `Product` table ke `image` column me save hoti hain.
Do tareeke:

### Tareeka A — URL paste karo (turant, bina setup)
Admin → Products → Add Product → **Image URL** field me koi bhi image ka link paste
kar do.

### Tareeka B — Computer se photo upload karo (Supabase Storage)
Ek baar setup karna hai:
1. Supabase → **Storage** → **New bucket** → naam **`products`** → **Public ON** → Create
2. Supabase → **Settings → API** → copy karo:
   - **Project URL**
   - **`service_role`** key (secret wali)
3. `.env.local` me daalo:
   ```
   NEXT_PUBLIC_SUPABASE_URL="https://...supabase.co"
   SUPABASE_SERVICE_ROLE_KEY="service_role-key-yahan"
   ```
4. `npm run dev` restart karo. Ab Add Product form me **"Upload photo"** button se
   computer se file choose karke upload kar sakte ho.

---

## 💳 6. Payment (Razorpay) setup

1. https://dashboard.razorpay.com → **Test Mode** ON
2. **Settings → API Keys → Generate Test Key**
3. `.env.local` me daalo:
   ```
   RAZORPAY_KEY_ID="rzp_test_xxxx"
   RAZORPAY_KEY_SECRET="secret-yahan"
   ```
4. Restart karo. Checkout pe "Pay Online" choose karo. Test card:
   `4111 1111 1111 1111`, koi bhi future expiry + CVV. Ya UPI: `success@razorpay`.

---

## 🧠 7. Code ka structure (kahan kya hai)

```
src/
├── app/                    # saare pages (Next.js App Router)
│   ├── page.js             # Home page
│   ├── products/           # product listing + [id] detail page
│   ├── cart/               # cart page
│   ├── checkout/           # checkout + payment
│   ├── orders/             # user ke orders
│   ├── account/            # user profile
│   ├── login, register/    # auth pages
│   ├── admin/              # ADMIN dashboard (sirf admin ke liye)
│   └── api/                # BACKEND — saari API yahan
│       ├── register/       # naya user banana
│       ├── auth/           # NextAuth login
│       ├── products/       # product list + (admin) add/edit/delete
│       ├── cart/           # cart add/remove/update
│       ├── orders/         # order banana + (admin) status badalna
│       ├── payment/        # Razorpay create-order + verify
│       └── upload/         # image upload (admin)
├── components/             # reusable UI (Navbar, ProductCard, forms...)
├── context/CartContext.jsx # cart ka global state
├── lib/                    # backend helpers
│   ├── prisma.js           # database connection
│   ├── auth.js             # login config
│   ├── queries.js          # database se data padhna
│   ├── admin.js            # admin check
│   ├── razorpay.js         # payment client
│   └── supabase.js         # image storage client
└── utils/formatPrice.js    # ₹ format karna

prisma/
├── schema.prisma           # database ka design (tables)
└── seed.mjs                # sample products database me daalna
```

### Data ka flow (simple)
```
User website pe kuch karta hai
        ↓
Page (src/app/...) → API route (src/app/api/...) → Prisma (src/lib/prisma.js)
        ↓
Supabase PostgreSQL database  ←── data yahan save/read hota hai
```

---

## 🛠️ 8. Common errors aur unke fix

| Error | Matlab | Fix |
|------|--------|-----|
| `Environment variable not found: DATABASE_URL` | `.env.local` nahi mili | File ka naam sahi karo (`.env.local`, `.txt` nahi), root me rakho, server restart karo |
| `prisma is not recognized` | `npm install` nahi hua | `npm install` chalao, phir `npx prisma generate` |
| Login: `Invalid email or password` | Account hai hi nahi | Pehle `/register` se account banao |
| `make-admin`: `No user found` | `.env` aur `.env.local` alag DB pe | Supabase Table Editor se role `ADMIN` karo |
| `<<<<<<<` code me dikhe | Merge conflict adhoora | Markers hatao, sahi code rakho |
| White screen | Dev mode me page compile ho raha hai | Normal hai; production (`npm run build`) me nahi hota |

---

## ✅ 9. Quick command reference

```bash
npm run dev          # website chalao (development)
npm run build        # production build (errors check karne ke liye)
npm run db:push      # schema ko database me bhejo
npm run seed         # sample products daalo
npx prisma studio    # database ko browser me dekho
npm run make-admin -- email@example.com   # user ko admin banao (sirf owner laptop pe)
```

---

Agar kuch samajh na aaye, to project owner se poochho ya is file ko dobara padho.
Happy coding! 🚀
